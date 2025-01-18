import pandas as pd
file_name_1 = "CLIMATE.csv"
file_name_2 = "CLEANED.csv"
data_file = pd.read_csv(file_name_1)
iso3_country = data_file["iso3_country"].tolist()
sectors = data_file["sector"].tolist()
years = data_file["year"].tolist()
co2 = data_file["co2"].tolist()
ch4 = data_file["ch4"].tolist()
n2o = data_file["n2o"].tolist()
co2e_100yr = data_file["co2e_100yr"].tolist()
co2e_20yr = data_file["co2e_20yr"].tolist()
