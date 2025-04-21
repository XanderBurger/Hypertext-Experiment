from flask import Flask, render_template, request
from contentLoader import ContentLoader

app = Flask(__name__)

content_loader = ContentLoader("yaml")

@app.route('/')
def index():
    yaml_content = content_loader.get_yaml_content()
    # home_content = [content for content in yaml_content if contact['meta']['route'] == "home"][0]
    
    return render_template("home.html")

@app.route('/content/<name>')
def content(name):
    yaml_content = content_loader.get_yaml_content()
    content = next(filter(lambda person: person['meta']['route'] == name, yaml_content))
    
    return render_template("content.html", content=content)

@app.route('/edgewater-layout')
def edgewater():
     return render_template("edgewater-layout.html")

if __name__ == "__main__":
    app.run(debug=True)
    

