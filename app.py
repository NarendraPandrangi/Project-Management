# app.py
# Entry point for backend application
from flask import Flask
from flask_cors import CORS

from routes.project import project_bp
from routes.sprint import sprint_bp
from routes.issue import issue_bp
from routes.user import user_bp

app = Flask(__name__)
CORS(app)

# Register Blueprints
app.register_blueprint(project_bp, url_prefix="/project")
app.register_blueprint(sprint_bp, url_prefix="/sprint")
app.register_blueprint(issue_bp, url_prefix="/issue")
app.register_blueprint(user_bp, url_prefix="/user")

if __name__ == "__main__":
    app.run(debug=True)
