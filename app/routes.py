from flask import render_template, abort
from app import app
import os
import json


@app.route('/')
def index():
    return render_template('index.html', title='Home')

@app.route('/services')
def services():
    return render_template('services.html', title='Our Services')

def service(service_name):
    json_file = os.path.join('services', f'{service_name}.json')
    try:
        with open(json_file, 'r') as f:
            service_data = json.load(f)
    except FileNotFoundError:
        abort(404)
    return render_template('services_template.html', service=service_data)

@app.route('/services/<service_name>')
def service_route(service_name):
    return service(service_name)

@app.route('/services/lawn-care')
def lawn_care():
    return service_route('lawn_care')

@app.route('/services/hardscaping')
def hardscaping():
    return service_route('hardscaping')

@app.route('/services/garden-design')
def garden_design():
    return service('garden_design')



@app.route('/services/irrigation-systems')
def irrigation_systems():
    return service('irrigation_systems')

@app.route('/services/landscaping-maintenance')
def landscaping_maintenance():
    return service('landscaping_maintenance')

@app.route('/services/tree-services')
def tree_services():
    return service('tree_services')

@app.route('/contact')
def contact():
    return render_template('contact.html', title='Contact Us')

@app.route('/about')
def about():
    return render_template('about.html', title='About Us')


@app.route('/portfolio')
def portfolio():
    return render_template('portfolio.html', title='Our Portfolio')

