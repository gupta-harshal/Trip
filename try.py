import requests
from transformers import pipeline

# Use Hugging Face model pipeline for conversational flow (text-generation)
chatbot = pipeline("text-generation", model="microsoft/DialoGPT-medium")

# Real API URLs (Amadeus API for flights)
AMADEUS_API_KEY = "tOLpFdCCXOmgzJuwadJWCucit0FJKEHK"
AMADEUS_API_SECRET = "qG7GeAH1BnkfkrlU"
FLIGHT_API_URL = "https://test.api.amadeus.com/v2/shopping/flight-offers"

# Dummy URL for hotels (replace with real hotel API)
HOTEL_API_URL = "https://api.example.com/hotels"

# Function to get Amadeus access token
def get_amadeus_access_token(api_key, api_secret):
    token_url = "https://test.api.amadeus.com/v1/security/oauth2/token"
    payload = {
        'grant_type': 'client_credentials',
        'client_id': 'tOLpFdCCXOmgzJuwadJWCucit0FJKEHK',
        'client_secret': 'API-Secret:-qG7GeAH1BnkfkrlU'
    }
    headers = {'Content-Type': 'application/x-www-form-urlencoded'}
    
    response = requests.post(token_url, data=payload, headers=headers)
    return response.json().get('access_token')

# Function to fetch flight data from Amadeus API
def fetch_flight_data_amadeus(origin, destination, date):
    access_token = get_amadeus_access_token(AMADEUS_API_KEY, AMADEUS_API_SECRET)
    headers = {'Authorization': f'Bearer {access_token}'}
    
    params = {
        'originLocationCode': origin,
        'destinationLocationCode': destination,
        'departureDate': date,
        'adults': 1
    }
    
    response = requests.get(FLIGHT_API_URL, headers=headers, params=params)
    
    if response.status_code == 200:
        return response.json()  # Assuming the response returns flight data in JSON
    return {"error": "Unable to fetch flight data"}

# Dummy function to fetch hotel data (replace with real API call)
def fetch_hotel_data(destination, checkin_date, checkout_date):
    response = requests.get(f"{HOTEL_API_URL}?destination={destination}&checkin={checkin_date}&checkout={checkout_date}")
    if response.status_code == 200:
        return response.json()  # Assuming the response returns hotel data in JSON
    return {"error": "Unable to fetch hotel data"}

# Terminal interaction function
def terminal_chat():
    print("Welcome to the Travel Assistant Chatbot!")
    print("Type 'exit' to stop the conversation.")
    
    while True:
        user_input = input("\nYou: ")
        
        # Exit condition
        if user_input.lower() == "exit":
            print("Goodbye!")
            break
        
        # Generate conversation using text-generation pipeline
        conversation = chatbot(user_input, max_length=50, num_return_sequences=1)
        response_text = conversation[0]['generated_text']  # Model response
        
        # Basic intent recognition
        if "flight" in user_input.lower():
            origin = "JFK"  # Replace with NLU extracted origin
            destination = "LHR"  # Replace with NLU extracted destination
            date = "2024-09-15"  # Replace with extracted date
            
            flights = fetch_flight_data_amadeus(origin, destination, date)
            if 'data' in flights:
                response_text += f"\nFlights found: {flights['data']}"  # Process flight results
            else:
                response_text += "\nNo flights found or error in fetching flight data."
        
        elif "hotel" in user_input.lower():
            destination = "London"
            checkin = "2024-09-15"
            checkout = "2024-09-20"
            
            hotels = fetch_hotel_data(destination, checkin, checkout)
            response_text += f"\nHotels found: {hotels['hotels']}"  # Process hotel results
        
        # Print the chatbot response in the terminal
        print(f"\nChatbot: {response_text}")

# Run the terminal interaction
if __name__ == "__main__":
    terminal_chat()
