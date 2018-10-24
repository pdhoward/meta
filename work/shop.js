{
	"actions": [
		{
			"collect": {
				"name": "travel_questions",
				"questions": [
					{
						"question": "Do you like traveling?",
						"name": "likes_traveling",
						"type": "Twilio.YES_NO"
					},
					{
						"question":"What's your favorite city?",
						"name": "favorite_city",
						"type": "Twilio.CITY"
					}
				],
				"on_complete": {
					"redirect": "https://myapp.com/collect"
				}
			}
		}
	]
}