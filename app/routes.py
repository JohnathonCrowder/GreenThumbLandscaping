from flask import render_template
from app import app
import json


@app.route('/')
def index():
    return render_template('index.html', title='Home')

@app.route('/services')
def services():
    return render_template('services.html', title='Our Services')

@app.route('/services/<service_name>')
def service(service_name):
    with open('services.json', 'r') as f:
        services = json.load(f)
    
    if service_name in services:
        service_info = services[service_name]
        return render_template('services_template.html', service=service_info)
    else:
        abort(404)

@app.route('/services/lawn-care')
def lawn_care():
    return service('lawn_care')

@app.route('/services/garden-design')
def garden_design():
    return service('garden_design')

@app.route('/services/hardscaping')
def hardscaping():
    return service('hardscaping')

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

