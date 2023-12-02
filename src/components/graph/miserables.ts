export default {
    "nodes": [
      { "id": "You", "group": 1 },
      { "id": "John", "group": 2 },
      { "id": "Ava", "group": 3 },
      { "id": "Alexa", "group": 3 },
      { "id": "Juan", "group": 3 },
      { "id": "Bob", "group": 2 },
      { "id": "Joe", "group": 2 },

    ],
    "links": [
      { "source": "You", "target": "John", "value": 20 },
      { "source": "You", "target": "Ava", "value": 20 },
      { "source": "Ava", "target": "Alexa", "value": 20 },
      { "source": "Alexa", "target": "Juan", "value": 20 },
      { "source": "John", "target": "Bob", "value": 20 },
      { "source": "Bob", "target": "Joe", "value": 20 },

    ]
  };