from flask import Flask, request
from flask_restful import Api, Resource
from flask import jsonify
from flask_cors import CORS, cross_origin


app = Flask(__name__)
cors = CORS(app)
api = Api(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/instance', methods=['POST'])
def result():
   if request.method == 'POST':
       email =  request.form.get('email')
       instance = request.formget('dockerinstance')
       data = {'status':'OK','email':email,'instance':instance}
       return jsonify(data)


if __name__ == '__main__':
     app.run(port=5002)
