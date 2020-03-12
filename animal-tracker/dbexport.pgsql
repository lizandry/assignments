--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2
-- Dumped by pg_dump version 12.2

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
-- Name: individuals; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.individuals (
    id integer NOT NULL,
    nickname text,
    species text,
    common_name text
);


ALTER TABLE public.individuals OWNER TO postgres;

--
-- Name: individuals_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.individuals_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.individuals_id_seq OWNER TO postgres;

--
-- Name: individuals_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.individuals_id_seq OWNED BY public.individuals.id;


--
-- Name: sightings; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sightings (
    id integer NOT NULL,
    animal_id integer,
    location text,
    sighter_email text,
    record_timestamp timestamp with time zone,
    common_name text,
    ishealthy boolean
);


ALTER TABLE public.sightings OWNER TO postgres;

--
-- Name: sightings_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sightings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sightings_id_seq OWNER TO postgres;

--
-- Name: sightings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sightings_id_seq OWNED BY public.sightings.id;


--
-- Name: species; Type: TABLE; Schema: public; Owner: Liz
--

CREATE TABLE public.species (
    taxonomy text NOT NULL,
    common_name text,
    num_in_wild integer,
    cn_status character varying(2)
);


ALTER TABLE public.species OWNER TO "Liz";

--
-- Name: individuals id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.individuals ALTER COLUMN id SET DEFAULT nextval('public.individuals_id_seq'::regclass);


--
-- Name: sightings id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sightings ALTER COLUMN id SET DEFAULT nextval('public.sightings_id_seq'::regclass);


--
-- Data for Name: individuals; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.individuals (id, nickname, species, common_name) FROM stdin;
1	steve	Carcharodon carcharias	Great White Shark
\.


--
-- Data for Name: sightings; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sightings (id, animal_id, location, sighter_email, record_timestamp, common_name, ishealthy) FROM stdin;
7	1	Colorado	text@gmail.com	\N	Great White Shark	\N
13	1	los angeles	test@gmail.com	\N	Great White Shark	t
16	\N	\N	\N	\N	\N	\N
17	\N	\N	\N	\N	\N	\N
18	\N	\N	\N	\N	\N	\N
19	\N	\N	\N	\N	\N	\N
20	\N	\N	\N	\N	\N	\N
21	\N	\N	\N	\N	\N	\N
22	\N	\N	\N	\N	\N	\N
23	\N	\N	\N	\N	\N	\N
24	\N	\N	\N	\N	\N	\N
25	\N	\N	\N	\N	\N	\N
26	\N	\N	\N	\N	\N	\N
27	\N	\N	\N	\N	\N	\N
28	\N	\N	\N	\N	\N	\N
29	\N	\N	\N	\N	\N	\N
30	\N	\N	\N	\N	\N	\N
31	\N	\N	\N	\N	\N	\N
32	\N	\N	\N	\N	\N	\N
33	\N	\N	\N	\N	\N	\N
34	\N	\N	\N	\N	\N	\N
35	\N	\N	\N	\N	\N	\N
50	\N	\N	\N	\N	\N	\N
51	\N	\N	\N	\N	\N	\N
52	\N	\N	\N	\N	\N	\N
53	\N	\N	\N	\N	\N	\N
54	\N	\N	\N	\N	\N	\N
55	\N	\N	\N	\N	\N	\N
56	\N	\N	\N	\N	\N	\N
57	\N	\N	\N	\N	\N	\N
58	\N	\N	\N	\N	\N	\N
59	\N	\N	\N	\N	\N	\N
60	\N	\N	\N	\N	\N	\N
61	\N	\N	\N	\N	\N	\N
62	\N	\N	\N	\N	\N	\N
63	\N	\N	\N	\N	\N	\N
64	\N	\N	\N	\N	\N	\N
65	\N	\N	\N	\N	\N	\N
66	\N	\N	\N	\N	\N	\N
67	\N	\N	\N	\N	\N	\N
68	\N	\N	\N	\N	\N	\N
69	\N	\N	\N	\N	\N	\N
70	\N	\N	\N	\N	\N	\N
71	\N	\N	\N	\N	\N	\N
72	\N	\N	\N	\N	\N	\N
73	\N	\N	\N	\N	\N	\N
74	\N	\N	\N	\N	\N	\N
75	\N	\N	\N	\N	\N	\N
76	\N	\N	\N	\N	\N	\N
77	\N	\N	\N	\N	\N	\N
\.


--
-- Data for Name: species; Type: TABLE DATA; Schema: public; Owner: Liz
--

COPY public.species (taxonomy, common_name, num_in_wild, cn_status) FROM stdin;
Pongo pygmaeus	Bornean Orangutan	104700	CR
Lycaon pictus	African Wild Dog	1409	EN
Ailurus fulgens	Red Panda	10000	EN
Carcharodon carcharias	Great White Shark	\N	VN
Vulpes lagopus	Arctic Fox	\N	LC
\.


--
-- Name: individuals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.individuals_id_seq', 1, true);


--
-- Name: sightings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sightings_id_seq', 77, true);


--
-- Name: individuals individuals_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.individuals
    ADD CONSTRAINT individuals_pkey PRIMARY KEY (id);


--
-- Name: sightings sightings_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sightings
    ADD CONSTRAINT sightings_pkey PRIMARY KEY (id);


--
-- Name: species species_animal_name_key; Type: CONSTRAINT; Schema: public; Owner: Liz
--

ALTER TABLE ONLY public.species
    ADD CONSTRAINT species_animal_name_key UNIQUE (common_name);


--
-- Name: species species_pkey; Type: CONSTRAINT; Schema: public; Owner: Liz
--

ALTER TABLE ONLY public.species
    ADD CONSTRAINT species_pkey PRIMARY KEY (taxonomy);


--
-- Name: sightings common_name; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sightings
    ADD CONSTRAINT common_name FOREIGN KEY (common_name) REFERENCES public.species(common_name);


--
-- Name: individuals individuals_common_name_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.individuals
    ADD CONSTRAINT individuals_common_name_fkey FOREIGN KEY (common_name) REFERENCES public.species(common_name);


--
-- Name: individuals individuals_species_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.individuals
    ADD CONSTRAINT individuals_species_fkey FOREIGN KEY (species) REFERENCES public.species(taxonomy) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: sightings sightings_animal_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sightings
    ADD CONSTRAINT sightings_animal_id_fkey FOREIGN KEY (animal_id) REFERENCES public.individuals(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

