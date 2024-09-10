#!/usr/bin/env python3
""" basic flask app """
from flask import Flask, render_template, request
from flask_babel import Babel

app = Flask(__name__)


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
    return request.accept_languages.best_match(app.config['LANGUAGES'])


@app.route('/', strict_slashes=False)
def index():
    """ display h1 and p"""
    return render_template('3-index.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5000')
