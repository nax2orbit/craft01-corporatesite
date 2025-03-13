# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


develop:
docker-compose -f docker-compose-dev.yml build
docker-compose -f docker-compose-dev.yml up -d
docker-compose -f docker-compose-dev.yml exec web rails db:create
http://localhost:3000
