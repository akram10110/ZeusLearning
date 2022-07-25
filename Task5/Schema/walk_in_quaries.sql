-- query to get all walk ins details -----------------------------------------------------------------------------------------------------------------------
SELECT w.walk_in_id , w.walk_in_title, w.start_date, w.end_date, w.special_tag, 
		wl.city
FROM walk_ins w
JOIN walk_in_location wl
	ON wl.location_id = w.location_id;

-- query to get all job roles in a walk ins --
SELECT j.job_role_title
FROM job_roles j
WHERE j.walk_in_id = 1;

-- details for a single walk-in ------------------------------------------------------------------------------------------------------------------------------
-- time slot --
SELECT walk_in_id, time 
FROM time_slots 
WHERE walk_in_id = 1;

-- jobs data --
SELECT job_role_id, job_role_title, ctc
FROM job_roles
WHERE walk_in_id = 1;

-- prerequisites --
SELECT w.walk_in_id , w.walk_in_title, w.general_instructions, w.exam_instruction, w.minimum_requirment
FROM walk_ins w;

-- process --
SELECT *
FROM process
WHERE walk_in_id = 1;

-- jobs des --
SELECT job_role_id, description
FROM job_role_description
WHERE job_role_id = 2;

-- jobs req --
SELECT job_role_id, requirments
FROM job_role_requirments
WHERE job_role_id = 2;

-- hall ticket --
SELECT aus.applied_id, aus.user_id, aus.walk_in_id, aus.time_slot, wi.location_id
FROM applied_users_data aus
JOIN walk_ins wi
	ON wi.walk_in_id = aus.walk_in_id;
    
-- get location --
SELECT * FROM walk_in_location
WHERE location_id = 2;
	




	






