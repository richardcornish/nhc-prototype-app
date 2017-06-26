# Web application prototype

Prototype for Next Health Choice web application for orderers. Deployed on S3.

[http://nhcapp.s3-website-us-east-1.amazonaws.com](http://nhcapp.s3-website-us-east-1.amazonaws.com/)

## Install

```
mkvirtualenv nhc-prototype-app
git clone git@github.com:richardcornish/nhc-prototype-app.git
cd nhc-prototype-app/
pip install -r requirements.txt
cd nhcprototype/
cactus build
cactus serve
```

Visit [127.0.0.1:8000](http://127.0.0.1:8000/).

## Docs

- [Cactus documentation](https://github.com/koenbok/cactus)
