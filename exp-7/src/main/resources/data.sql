INSERT INTO users (id, username, password) VALUES
(1, 'user1', 'user123'),
(2, 'admin1', 'admin123');

INSERT INTO user_roles (user_id, roles) VALUES
(1, 'ROLE_USER'),
(2, 'ROLE_ADMIN');