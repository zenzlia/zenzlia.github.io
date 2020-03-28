import json
import requests
import tiers

api_token = '6PG3OWV9UCVFZNTXQJKR'
id_url  = 'https://api.ausmash.com.au/players/'

headers = {'Content-Type': 'application/json',
           'X-ApiKey': '6PG3OWV9UCVFZNTXQJKR'}

first_tier = {}
second_tier = {}
third_tier = {}
fourth_tier = {}

def get_account_info(id):
    url = 'https://api.ausmash.com.au/players/{}/matches/'.format(id)
    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        return (response.content)
    else:
        return None

def get_player_name(id):
    try:
        url = id_url + str(id)
        response = requests.get(url, headers=headers)

        if response.status_code == 200:
            f = json.loads(response.content)
            return f['Name']
        else:
            return None
            
    except TypeError as e:
        pass

def get_first_tiers():
    # Ben Gold Winners
    player_string = get_account_info(2234)

    if player_string is not None:
        parsed = json.loads(player_string)
        for i in parsed:
            try:
                id = i['Winner']['ID']
                if id not in first_tier and i["Event"]["Game"]["Short"] == "SSBU":
                    player_name = get_player_name(i['Winner']['ID'])
                    first_tier[id] = (player_name, "Ben Gold")
            except TypeError:
                pass
    else:
        print('[!] Request Failed @ first tiers')

def get_player_id(name):
    url = 'https://api.ausmash.com.au/players/search?q={}'.format(name)
    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        return (response.content)
    else:
        return None

# Tier_list - existing one
# To add - the one to add to
def get_other_tiers(tier_list, to_add):
    for player in tier_list.keys():
        player_string = get_account_info(player)

        if player_string is not None:
            parsed = json.loads(player_string)
            for i in parsed:
                try:
                    id = i['Winner']['ID']
                    if id not in tier_list and id not in first_tier and id not in second_tier and id not in third_tier and id not in fourth_tier and i["Event"]["Game"]["Short"] == "SSBU":
                        player_name = get_player_name(i['Winner']['ID'])
                        to_add[id] = (player_name, tier_list[player][0])
                except TypeError:
                    pass
        else:
            print('[!] Request Failed @ second tiers')


def get_name_tiers(tier_list, dic_to_append):
    for player in tier_list:
        player_id = json.loads(get_player_id(player))[0]['ID']
        player_string = get_account_info(player_id)

        if player_string is not None:
            parsed = json.loads(player_string)
            for i in parsed:
                try:
                    id = i['Winner']['ID']
                    if id not in first_tier and id not in second_tier and id not in third_tier and id not in fourth_tier and i["Event"]["Game"]["Short"] == "SSBU":
                        player_name = get_player_name(i['Winner']['ID'])
                        dic_to_append[id] = player_name
                except TypeError:
                    pass
        else:
            print('[!] Request Failed @ name search')



def print_data(data, data_name):
    f = open("{}.txt".format(data_name), "w+")
    f.write("var {} = ".format(data_name))
    f.write("{")
    for id, player in data.items():
        f.write("'{}':'{}',".format(player[0], player[1]))

    f.write("}\n")
    f.write("{} = {}".format(data_name, data))
    f.close() 

def print_all_data(data_list):
    f = open("data.js", "w+")

    for data in data_list:
            for id, player in data.items():
                f.write("'{}':'{}',".format(player[0], player[1]))

            f.write("}\n")
    f.close()



def get_data():
    get_first_tiers()
    print("first tiers done!")
    print_data(first_tier, "first")

    get_other_tiers(first_tier, second_tier)
    print("second tiers done!")
    print_data(second_tier, "second")

    get_other_tiers(second_tier, third_tier)
    print("third tiers done!")
    print_data(third_tier, "third")

    get_other_tiers(third_tier, fourth_tier)
    print("fourth tiers done!")
    print_data(fourth_tier, "fourth")


get_data()
data_list = [first_tier, second_tier, third_tier, fourth_tier]
print_all_data(data_list)
