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

補足：
コーポレートサイトから雰囲気がそれてしまったため、developからは削除するが別ルートBとして残しておく。

![スクリーンショット 2025-03-23 22 29 12](https://github.com/user-attachments/assets/a657509f-77b1-4ac7-8222-d337c4d07195)

