--
-- PostgreSQL database dump
--

-- Dumped from database version 12.9 (Ubuntu 12.9-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.9 (Ubuntu 12.9-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: classes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.classes (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: classes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.classes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: classes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.classes_id_seq OWNED BY public.classes.id;


--
-- Name: classes_name_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.classes_name_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: classes_name_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.classes_name_seq OWNED BY public.classes.name;


--
-- Name: questions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.questions (
    id integer NOT NULL,
    question text NOT NULL,
    "studentId" integer NOT NULL,
    "classId" integer NOT NULL,
    tags text,
    "submitAt" text NOT NULL,
    answered boolean NOT NULL,
    "answeredAt" text,
    "answeredBy" text,
    answer text
);


--
-- Name: questions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.questions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: questions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.questions_id_seq OWNED BY public.questions.id;


--
-- Name: students; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.students (
    id integer NOT NULL,
    name text NOT NULL,
    "classId" integer NOT NULL,
    points integer DEFAULT 0 NOT NULL,
    answers integer DEFAULT 0 NOT NULL,
    token text NOT NULL
);


--
-- Name: students_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.students_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: students_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.students_id_seq OWNED BY public.students.id;


--
-- Name: classes id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.classes ALTER COLUMN id SET DEFAULT nextval('public.classes_id_seq'::regclass);


--
-- Name: classes name; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.classes ALTER COLUMN name SET DEFAULT nextval('public.classes_name_seq'::regclass);


--
-- Name: questions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.questions ALTER COLUMN id SET DEFAULT nextval('public.questions_id_seq'::regclass);


--
-- Name: students id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.students ALTER COLUMN id SET DEFAULT nextval('public.students_id_seq'::regclass);


--
-- Data for Name: classes; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.classes VALUES (1, 'T1');
INSERT INTO public.classes VALUES (2, 'T2');
INSERT INTO public.classes VALUES (3, 'T3');
INSERT INTO public.classes VALUES (4, 'T4');
INSERT INTO public.classes VALUES (5, 'T5');


--
-- Data for Name: questions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.questions VALUES (1, 'como rodar esse código em typescript?', 1, 3, 'typescript, javascript', '2021-11-0 10:54', false, NULL, NULL, NULL);
INSERT INTO public.questions VALUES (2, 'como rodar esse código em typescript?', 1, 3, 'typescript, javascript', '2021-11-0 10:54', false, NULL, NULL, NULL);
INSERT INTO public.questions VALUES (3, 'como rodar esse outro código em typescript?', 1, 3, 'typescript, javascript', '2021-11-0 10:56', false, NULL, NULL, NULL);
INSERT INTO public.questions VALUES (4, 'como rodar esse ultimo código em typescript?', 1, 3, 'typescript, javascript', '2021-11-0 10:57', false, NULL, NULL, NULL);
INSERT INTO public.questions VALUES (5, 'como rodar esse ultimo código em typescript?', 1, 3, 'typescript, javascript', '2021-11-0 10:59', false, NULL, NULL, NULL);
INSERT INTO public.questions VALUES (6, 'como rodar esse ultimo código em typescript?', 1, 3, 'typescript, javascript', '2021-11-0 10:59', false, NULL, NULL, NULL);
INSERT INTO public.questions VALUES (7, 'como rodar esse ultimooo código em typescript?', 1, 3, 'typescript, javascript', '2021-11-0 11:9', false, NULL, NULL, NULL);
INSERT INTO public.questions VALUES (8, 'Why is my father more powerfull than Vegeta?', 2, 4, 'dragonball, dbz, anime, jp', '2021-11-0 15:48', true, '2021-11-0 16:10', 'Vegeta', 'HAHAHAHA Everybody knows he is not!!!');


--
-- Data for Name: students; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.students VALUES (1, 'Vegeta', 3, 0, 0, 'ecaa33de-1898-49ca-8c63-2347d0e439c8');
INSERT INTO public.students VALUES (2, 'Goku', 4, 0, 0, '67f8a685-0351-4726-ac62-55d86f67fee4');


--
-- Name: classes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.classes_id_seq', 5, true);


--
-- Name: classes_name_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.classes_name_seq', 1, false);


--
-- Name: questions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.questions_id_seq', 8, true);


--
-- Name: students_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.students_id_seq', 2, true);


--
-- Name: classes classes_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.classes
    ADD CONSTRAINT classes_name_key UNIQUE (name);


--
-- Name: classes classes_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.classes
    ADD CONSTRAINT classes_pk PRIMARY KEY (id);


--
-- Name: questions questions_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.questions
    ADD CONSTRAINT questions_pk PRIMARY KEY (id);


--
-- Name: students students_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pk PRIMARY KEY (id);


--
-- Name: students students_token_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_token_key UNIQUE (token);


--
-- Name: questions questions_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.questions
    ADD CONSTRAINT questions_fk0 FOREIGN KEY ("studentId") REFERENCES public.students(id);


--
-- Name: questions questions_fk1; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.questions
    ADD CONSTRAINT questions_fk1 FOREIGN KEY ("classId") REFERENCES public.classes(id);


--
-- Name: students students_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_fk0 FOREIGN KEY ("classId") REFERENCES public.classes(id);


--
-- PostgreSQL database dump complete
--

