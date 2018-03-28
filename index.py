#!/usr/bin/python
# -*- coding: utf-8 -*-
from flask import Flask, request
from flask_restful import Api, Resource
from flask import jsonify, json
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
api = Api(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/instance', methods=['POST', 'GET', 'PUT'])
def result():
    if request.method == 'POST':
        values = request.get_json(force=True, silent=True, cache=True)
        resp = jsonify({'email': values['email'],
                       'instance': values['instance'],
                       'version': values['version']})
        return resp
    else:
        return 'Error Occured'
    return app

if __name__ == '__main__':
    app.run(debug=True)
