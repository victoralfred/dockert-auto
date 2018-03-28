from flask import Flask, request
from flask_restful import Api, Resource
from flask import jsonify, json
from flask_cors import CORS, cross_origin


app = Flask(__name__)
cors = CORS(app)
api = Api(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/instance', methods=['POST','GET','PUT'])
def result():
    if request.method == 'PUT':
    	
   	    response = jsonify({
   	    	'email': request.form.get('email'),
   	    	'instance': request.form.get('instance'),
   	    	'version': request.form.get('version')
   	    	})
   	    return response
    else:
    	return "Error Occured"

    return app


if __name__ == '__main__':
     app.run(port=5002)
