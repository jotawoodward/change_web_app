import flask
from decimal import *
from flask_cors import CORS, cross_origin
app = flask.Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


def calc_change(diff):
    options = [50.0, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01]
    calc_list=[]
    for x in options:
        print(diff)
        number= int(Decimal(str(diff))/Decimal(str(x)))
        print(number)
        diff = Decimal(str(diff))- Decimal(str(number))*Decimal(str(x))
        calc_list.append({"piece":x, "number": number})
    return calc_list

def validate(field):
    try:
        value = flask.request.json.get(field)
    except:
        return "Please add a body to the request"
    if value is None:
       return "Please add {field} field to the request body"
    return value
    
@app.route('/calc-change', methods = ['POST'])
def api():
    amount = validate("amount")
    price = validate("price")

    calc_list = calc_change(amount - price)
    return flask.jsonify( calc_list )

if __name__ == "__main__":
    app.run(host="localhost", port=5000, debug=False)
