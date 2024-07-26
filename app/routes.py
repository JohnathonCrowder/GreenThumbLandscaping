from flask import render_template
from app import app

@app.route('/')
def index():
    return render_template('index.html', title='Home')

@app.route('/services')
def services():
    return render_template('services.html', title='Our Services')

@app.route('/services/lawn-care')
def lawn_care():
    return render_template('lawn_care.html', title='Lawn Care Services')

@app.route('/services/garden-design')
def garden_design():
    return render_template('garden_design.html', title='Garden Design Services')

@app.route('/services/hardscaping')
def hardscaping():
    return render_template('hardscaping.html', title='Hardscaping Services')

@app.route('/services/irrigation-systems')
def irrigation_systems():
    return render_template('irrigation_systems.html', title='Irrigation System Services')

@app.route('/services/tree-services')
def tree_services():
    return render_template('tree_services.html', title='Tree Services')

@app.route('/contact')
def contact():
    return render_template('contact.html', title='Contact Us')

@app.route('/about')
def about():
    return render_template('about.html', title='About Us')


@app.route('/portfolio')
def portfolio():
    return render_template('portfolio.html', title='Our Portfolio')

@app.route('/services/landscaping-maintenance')
def landscaping_maintenance():
    return render_template('landscaping_maintenance.html', title='Landscaping Maintenance')