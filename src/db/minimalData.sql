INSERT INTO company(
        identify,
        company,
        phone,
        email,
        owner_name,
        owner_last_name,
        activation_code
    )
VALUES(
        '1758081770',
        'Star Code',
        '0979546842',
        'starcode@gmail.com',
        'Marco',
        'Barrera',
        '98d80b710e9e7d95f77b529b9d092fb2'
    );
INSERT INTO rol(rol, company_id)
VALUES('admin', 1);
INSERT INTO provider_type(type)
VALUES('property'),
    ('services'),
    ('resources');
INSERT INTO country(name)
VALUES('ecuador'),
    ('guatemala');
INSERT INTO state(country_id, name)
VALUES (1, 'Azuay'),
    (1, 'Bolívar'),
    (1, 'Cañar'),
    (1, 'Carchi'),
    (1, 'Chimborazo'),
    (1, 'Cotopaxi'),
    (1, 'El Oro'),
    (1, 'Esmeraldas'),
    (1, 'Galápagos'),
    (1, 'Guayas'),
    (1, 'Imbabura'),
    (1, 'Loja'),
    (1, 'Los Ríos'),
    (1, 'Manabí'),
    (1, 'Morona Santiago'),
    (1, 'Napo'),
    (1, 'Orellana'),
    (1, 'Pastaza'),
    (1, 'Pichincha'),
    (1, 'Santa Elena'),
    (1, 'Santo Domingo de los Tsáchilas'),
    (1, 'Sucumbíos'),
    (1, 'Tungurahua'),
    (1, 'Zamora Chinchipe'),
    (2, 'Alta Verapaz'),
    (2, 'Baja Verapaz'),
    (2, 'Chimaltenango'),
    (2, 'Chiquimula'),
    (2, 'El Progreso'),
    (2, 'Escuintla'),
    (2, 'Guatemala'),
    (2, 'Huehuetenango'),
    (2, 'Izabal'),
    (2, 'Jalapa'),
    (2, 'Jutiapa'),
    (2, 'Petén'),
    (2, 'Quetzaltenango'),
    (2, 'Quiché'),
    (2, 'Retalhuleu'),
    (2, 'Sacatepéquez'),
    (2, 'San Marcos'),
    (2, 'Santa Rosa'),
    (2, 'Sololá'),
    (2, 'Suchitepéquez'),
    (2, 'Totonicapán'),
    (2, 'Zacapa');