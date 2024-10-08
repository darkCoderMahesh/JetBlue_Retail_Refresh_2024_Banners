FT.manifest({
	"filename": "index.html",
	"width": 300,
	"height": 600,
	"clickTagCount": 3,
	"hideBrowsers": ["ie8"],
	"richLoads": [
		{"name": "RL1", "src": "JB_Retail_24_Wifi_Dynamic_300x600_RL1"},
		{"name": "RL2", "src": "JB_Retail_24_Wifi_Dynamic_300x600_RL2"}
	],
    "instantAds": [
		{"name": "RL1", 						"type": "richLoad"},
		{"name": "RL2", 						"type": "richLoad"},
		{"name": "feedEndpoint", 				"type": "text", 			"default": "https://cdn.flashtalking.com/feeds/jetblue/routes/jfk_pls.json?[%CACHEBUSTER%]"},
		{"name": "defaultFeedEndpoint", 		"type": "text",				"default": "https://cdn.flashtalking.com/feeds/jetblue/routes/default.json?[%CACHEBUSTER%]"},
		{"name": "segmentId", 					"type": "text", 			"default": "false"},
		{"name": "isGeo_Ad",					"type": "text", 			"default": "false"},
		{"name": "backgroundColor",				"type": "text", 			"default": "#F1F6FC"},
		{"name": "headline_color",				"type": "text", 			"default": "#FFFFFF"},
		{"name": "subhead_color",				"type": "text", 			"default": "#FF8322"},
		{"name": "price_color",					"type": "text", 			"default": "#FF8322"},
		{"name": "oneWay_color",					"type": "text", 		"default": "#FFFFFF"},
		{"name": "legal_color",					"type": "text", 			"default": "#FFFFFF"},
		{"name": "CTA_background_color",			"type": "text", 		"default": "#FFFFFF"},
		{"name": "CTA_text_color",				"type": "text", 			"default": "#00205B"},
		{"name": "headline1_text",				"type": "text",				"default": "Fly with JetBlue<br>"},
		{"name": "headline2_text",				"type": "text",				"default": ""},
		{"name": "one_way_text",					"type": "text",			"default": "one<br/>way<sup class='asterisk'>&ast;</sup>"},
		{"name": "seeDetails_button_text",			"type": "text",			"default": ""},
		{"name": "seeDetails_body_text",			"type": "text",			"default": ""},
		{"name": "restrictions_text",				"type": "text",			"default": "<sup class='asterisk'>&ast;</sup>Restrictions apply, base fare only."},
		{"name": "Retail_dynamic_clickTag_URL",		"type": "text",			"default": "http://www.jetblue.com"},
		{"name": "Retail_default_clickTag_URL",		"type": "text",			"default": "http://www.jetblue.com"},
		{"name": "PSA_dynamic_clickTag_URL",		"type": "text",			"default": "http://www.avis.com"}
    ]
});
