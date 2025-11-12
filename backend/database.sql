CREATE TABLE user_settings (
  user_id INT PRIMARY KEY,
  theme VARCHAR(10) NOT NULL DEFAULT 'light'
);

INSERT INTO user_settings (user_id, theme) VALUES (1, 'light');
