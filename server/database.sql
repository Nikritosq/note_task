CREATE DATABASE perntodo;

CREATE TABLE note(
    n_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    hashtag VARCHAR(255)
);