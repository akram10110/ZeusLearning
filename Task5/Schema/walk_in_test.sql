INSERT INTO walk_ins
value(default, 'walk in for designer and development job role', '2022-09-27', '2022-09-28', 2, null,  '{"1":"general instructions 3"}', '{"1":"exam instructions 3"}', '{"1":"minimum requirements 3"}',default, default);

SELECT * FROM walk_ins;

INSERT INTO walk_in_location
value(default, 'zeus learning', ' this is address 2', 'delhi', 335588, 22222222, default, default);

SELECT * FROM walk_in_location;

INSERT INTO job_roles
value(default, 3, 'software engineer', 800000, default, default);

SELECT * FROM job_roles;

INSERT INTO time_slots
value(2, '10:00 AM to 11:00 AM', default, default);

SELECT * FROM time_slots;
-- -------------------------------------------- --
INSERT INTO job_role_description
value(3, 'job role id 3 des 2', default, default);

SELECT * FROM job_role_description;

INSERT INTO job_role_requirments
values (3, 'job role id 3 req 1', default, default), (3, 'job role id 3 req 2', default, default), (3, 'job role id 3 req 3', default, default);

SELECT * FROM job_role_requirments;

INSERT INTO process
values (default, 1 , 2, '2022-09-29', 'interview', null);

SELECT * FROM process;


INSERT INTO applied_users_data
values (default, 1 , 1, '10:00 AM to 11:00 AM', 'this/is/resume/path', default, default);

SELECT * FROM applied_users_data;

INSERT INTO walk_ins (walk_in_title, start_date, end_date, location_id, special_tag, general_instructions, exam_instruction, minimum_requirment)
values 
('walk in title 2', '2022-08-26',	'2022-08-27',	2,	'special tag for walk in 2',	'{"1": "general instruction for walk in 2", "2": "general instruction for walk in 2"}',	'{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"}',	'{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"}'),
('walk in title 3', '2022-08-27',	'2022-08-28',	3,		null,'{"1": "general instruction for walk in 3", "2": "general instruction for walk in 3"}',	'{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"}',	'{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"}'),
('walk in title 4', '2022-08-28',	'2022-08-29',	4,	'special tag for walk in 4',	'{"1": "general instruction for walk in 1", "2": "general instruction for walk in 1"}',	'{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"}',	'{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"}'),
('walk in title 5', '2022-08-29',	'2022-08-30',	5,	'special tag for walk in 5',	'{"1": "general instruction for walk in 2", "2": "general instruction for walk in 2"}',	'{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"}',	'{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"}'),
('walk in title 6', '2022-08-30',	'2022-08-31',	6,		null,'{"1": "general instruction for walk in 3", "2": "general instruction for walk in 3"}',	'{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"}',	'{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"}'),
('walk in title 7', '2022-08-31',	'2022-09-01',	7,	'special tag for walk in 7',	'{"1": "general instruction for walk in 1", "2": "general instruction for walk in 1"}',	'{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"}',	'{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"}'),
('walk in title 8', '2022-09-01',	'2022-09-02',	8,	'special tag for walk in 8',	'{"1": "general instruction for walk in 2", "2": "general instruction for walk in 2"}',	'{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"}',	'{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"}'),
('walk in title 9', '2022-09-02',	'2022-09-03',	9,	'special tag for walk in 9',	'{"1": "general instruction for walk in 3", "2": "general instruction for walk in 3"}',	'{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"}',	'{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"}'),
('walk in title 10,'	'2022-09-03',	'2022-09-04',	10,		null,'{"1": "general instruction for walk in 1", "2": "general instruction for walk in 1"}',	'{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"}',	'{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"}'),
('walk in title 11,'	'2022-09-04',	'2022-09-05',	11,	'special tag for walk in 11',	'{"1": "general instruction for walk in 2", "2": "general instruction for walk in 2"',}'	{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"'}',	{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"}'),
('walk in title 12,'	'2022-09-05',	'2022-09-06',	12,	'special tag for walk in 12',	{"1": "general instruction for walk in 3", "2": "general instruction for walk in 3"',}'	{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"',}'	{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"'}),
('walk in title 13,'	'2022-09-06',	'2022-09-07',	13,		null,'{"1": "general instruction for walk in 1", "2": "general instruction for walk in 1"}',	'{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"}',	'{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"}'),
('walk in title 14,'	'2022-09-07',	'2022-09-08',	14,		null,'{"1": "general instruction for walk in 2", "2": "general instruction for walk in 2"}',	'{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"}',	'{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"}'),
('walk in title 15,'	'2022-09-08',	'2022-09-09',	15,	'special tag for walk in 15',	{"1": "general instruction for walk in 3", "2": "general instruction for walk in 3"',}'	{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"',}'	{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"'}),
('walk in title 16,'	'2022-09-09',	'2022-09-10',	16,		null,'{"1": "general instruction for walk in 1", "2": "general instruction for walk in 1"}',	'{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"}',	'{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"}'),
('walk in title 17,'	'2022-09-10',	'2022-09-11',	17,	'special tag for walk in 17',	{"1": "general instruction for walk in 2", "2": "general instruction for walk in 2"',}'	{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"',}'	{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"'}),
('walk in title 18,'	'2022-09-11',	'2022-09-12',	18,	'special tag for walk in 18',	{"1": "general instruction for walk in 3", "2": "general instruction for walk in 3"',}'	{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"',}'	{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"'}),
('walk in title 19,'	'2022-09-12',	'2022-09-13',	19,	'special tag for walk in 19',	{"1": "general instruction for walk in 1", "2": "general instruction for walk in 1"',}'	{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"',}'	{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"'}),
('walk in title 20,'	'2022-09-13',	'2022-09-14',	20,	'special tag for walk in 20',	{"1": "general instruction for walk in 2", "2": "general instruction for walk in 2"',}'	{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"',}'	{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"'}),
('walk in title 21,'	'2022-09-14',	'2022-09-15',	21,	'special tag for walk in 21',	{"1": "general instruction for walk in 3", "2": "general instruction for walk in 3"',}'	{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"',}'	{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"'}),
('walk in title 22,'	'2022-09-15',	'2022-09-16',	22,	'special tag for walk in 22',	{"1": "general instruction for walk in 1", "2": "general instruction for walk in 1"',}'	{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"',}'	{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"'}),
('walk in title 23,'	'2022-09-16',	'2022-09-17',	23,		null,'{"1": "general instruction for walk in 2", "2": "general instruction for walk in 2"}',	'{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"}',	'{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"}'),
('walk in title 24,'	'2022-09-17',	'2022-09-18',	24,		null,'{"1": "general instruction for walk in 3", "2": "general instruction for walk in 3"}',	'{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"}',	'{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"}'),
('walk in title 25,'	'2022-09-18',	'2022-09-19',	25,	'special tag for walk in 25',	{"1": "general instruction for walk in 1", "2": "general instruction for walk in 1"',}'	{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"',}'	{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"'}),
('walk in title 26,'	'2022-09-19',	'2022-09-20',	26,	'special tag for walk in 26',	{"1": "general instruction for walk in 2", "2": "general instruction for walk in 2"',}'	{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"',}'	{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"'}),
('walk in title 27,'	'2022-09-20',	'2022-09-21',	27,		null,'{"1": "general instruction for walk in 3", "2": "general instruction for walk in 3"}',	'{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"}',	'{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"}'),
('walk in title 28,'	'2022-09-21',	'2022-09-22',	28,	'special tag for walk in 28',	{"1": "general instruction for walk in 1", "2": "general instruction for walk in 1"',}'	{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"',}'	{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"'}),
('walk in title 29,'	'2022-09-22',	'2022-09-23',	29,	'special tag for walk in 29',	{"1": "general instruction for walk in 2", "2": "general instruction for walk in 2"',}'	{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"',}'	{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"'}),
('walk in title 30,'	'2022-09-23',	'2022-09-24',	30,		null,'{"1": "general instruction for walk in 3", "2": "general instruction for walk in 3"}',	'{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"}',	'{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"}'),
('walk in title 31,'	'2022-09-24',	'2022-09-25',	31,	'special tag for walk in 31',	{"1": "general instruction for walk in 1", "2": "general instruction for walk in 1"',}'	{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"',}'	{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"'}),
('walk in title 32,'	'2022-09-25',	'2022-09-26',	32,		null,'{"1": "general instruction for walk in 2", "2": "general instruction for walk in 2"}',	'{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"}',	'{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"}'),
('walk in title 33,'	'2022-09-26',	'2022-09-27',	33,	'special tag for walk in 33',	{"1": "general instruction for walk in 3", "2": "general instruction for walk in 3"',}'	{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"',}'	{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"'}),
('walk in title 34,'	'2022-09-27',	'2022-09-28',	34,	'special tag for walk in 34',	{"1": "general instruction for walk in 1", "2": "general instruction for walk in 1"',}'	{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"',}'	{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"'}),
('walk in title 35,'	'2022-09-28',	'2022-09-29',	35,	'special tag for walk in 35',	{"1": "general instruction for walk in 2", "2": "general instruction for walk in 2"',}'	{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"',}'	{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"'}),
('walk in title 36,'	'2022-09-29',	'2022-09-30',	36,	'special tag for walk in 36',	{"1": "general instruction for walk in 3", "2": "general instruction for walk in 3"',}'	{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"',}'	{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"'}),
('walk in title 37,'	'2022-09-30',	'2022-10-01',	37,	'special tag for walk in 37',	{"1": "general instruction for walk in 1", "2": "general instruction for walk in 1"',}'	{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"',}'	{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"'}),
('walk in title 38,'	'2022-10-01',	'2022-10-02',	38,		null,'{"1": "general instruction for walk in 2", "2": "general instruction for walk in 2"}',	'{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"}',	'{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"}'),
('walk in title 39,'	'2022-10-02',	'2022-10-03',	39,	'special tag for walk in 39',	{"1": "general instruction for walk in 3", "2": "general instruction for walk in 3"',}'	{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"',}'	{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"'}),
('walk in title 40,'	'2022-10-03',	'2022-10-04',	40,		null,'{"1": "general instruction for walk in 1", "2": "general instruction for walk in 1"}',	'{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"}',	'{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"}'),
('walk in title 41,'	'2022-10-04',	'2022-10-05',	41,	'special tag for walk in 41',	{"1": "general instruction for walk in 2", "2": "general instruction for walk in 2"',}'	{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"',}'	{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"'}),
('walk in title 42,'	'2022-10-05',	'2022-10-06',	42,	'special tag for walk in 42',	{"1": "general instruction for walk in 3", "2": "general instruction for walk in 3"',}'	{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"',}'	{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"'}),
('walk in title 43,'	'2022-10-06',	'2022-10-07',	43,	'special tag for walk in 43',	{"1": "general instruction for walk in 1", "2": "general instruction for walk in 1"',}'	{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"',}'	{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"'}),
('walk in title 44,'	'2022-10-07',	'2022-10-08',	44,		null,'{"1": "general instruction for walk in 2", "2": "general instruction for walk in 2"}',	'{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"}',	'{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"}'),
('walk in title 45,'	'2022-10-08',	'2022-10-09',	45,	'special tag for walk in 45',	{"1": "general instruction for walk in 3", "2": "general instruction for walk in 3"',}'	{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"',}'	{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"'}),
('walk in title 46,'	'2022-10-09',	'2022-10-10',	46,	'special tag for walk in 46',	{"1": "general instruction for walk in 1", "2": "general instruction for walk in 1"',}'	{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"',}'	{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"'}),
('walk in title 47,'	'2022-10-10',	'2022-10-11',	47,		null,'{"1": "general instruction for walk in 2", "2": "general instruction for walk in 2"}',	'{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"}',	'{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"}'),
('walk in title 48,'	'2022-10-11',	'2022-10-12',	48,	'special tag for walk in 48',	{"1": "general instruction for walk in 3", "2": "general instruction for walk in 3"',}'	{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"',}'	{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"'}),
('walk in title 49,'	'2022-10-12',	'2022-10-13',	49,		null,'{"1": "general instruction for walk in 1", "2": "general instruction for walk in 1"}',	'{"1": "exam instruction for walk in 1", "2": "exam instruction for walk in 1"}',	'{"1": "minimum requirment for walk in 1", "2":  "minimum requirment for walk in 1"}')			



