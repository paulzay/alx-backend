#!/usr/bin/env python3
""" basic flask app """
from flask import Flask, render_template, request
from flask_babel import Babel

app = Flask(__name__)

users = {
    1: {"name": "Balou", "locale": "fr", "timezone": "Europe/Paris"},
    2: {"name": "Beyonce", "locale": "en", "timezone": "US/Central"},
    3: {"name": "Spock", "locale": "kg", "timezone": "Vulcan"},
    4: {"name": "Teletubby", "locale": None, "timezone": "Europe/London"},
}


class Config:
    """ config class """
    LANGUAGES = ['en', 'fr']
    BABEL_DEFAULT_LOCALE = 'en'
    BABEL_DEFAULT_TIMEZONE = 'UTC'


app.config.from_object(Config)
babel = Babel(app)


@babel.localeselector
def get_locale():
    """ get locale """
    locale = request.args.get('locale')
    if locale in app.config['LANGUAGES']:
        return locale
    return request.accept_languages.best_match(app.config['LANGUAGES'])

def get_user(user_id: int) -> dict:
    """ get a user """
    login_id = request.args.get('login_as')
    if login_id:
        user_id = int(login_id)

    if user_id in users:
        return users.get(user_id)
    else:
        return None

@app.before_request
def before_request() -> None:
    """ before request handler """
    user = get_user(request.args.get('login_as'))
    if user:
        g.user = user


@app.route('/', strict_slashes=False)
def index():
    """ display h1 and p"""
    return render_template('4-index.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5000')
