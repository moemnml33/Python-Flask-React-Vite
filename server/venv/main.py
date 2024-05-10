# jsonify sends the response of our API in a JSON format
from flask import Flask, jsonify
# cross origin resource sharing so we can make requests from different URLs 
from flask_cors import CORS
# create app instance
app = Flask(__name__)
# create cors instance - * is to accept all origins 
cors = CORS(app, origins="*")
# create route - GET method is used to retrieve data from the server
@app.route('/', methods=["GET"])
# the function that runs whenever we go the route specified above
def hello_world():
    return jsonify ({
        "message": ['Hello, World!']
        }
                    )
    
# main
if __name__ == '__main__':
    # debug is true: toggle development mode that allows us to see live updates
    app.run(debug=True, port=8080)