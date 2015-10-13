# NHC prototype

Prototype for Next Health Choice app for orderers. Deployed on S3.

[http://nhcprototype.s3-website-us-east-1.amazonaws.com](http://nhcprototype.s3-website-us-east-1.amazonaws.com/)

## Install

```
mkvirtualenv nhc-prototype
git clone git@github.com:Zavteq/nhc-prototype.git
cd nhc-prototype/
pip install requirements.txt
cd nhcprototype/
cactus build
cactus serve
```

Visit [127.0.0.1:8000](http://127.0.0.1:8000/).

## Docs

- [Cactus documentation](https://github.com/koenbok/cactus)
