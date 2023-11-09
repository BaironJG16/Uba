# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

#Nino.create(nombre: 'Pedro', apellido: 'Peréz', Fecha_nacimiento: '10/06/1999', direccion: 'Carmen lyra')

#User.create(nombre: 'Andrey', apellido: 'Guillén', correo: 'Andreyguillen1603@gmail', direccion: 'Esparza')

#TiposUser.create(nombre: 'Andrey', apellido: 'Guillén', puesto: 'Chofer')

#Servicio.create(nombre: 'transporte', description: 'Este servicio brinda transporte del hogar a la institucion y viceversa')

#Registro.create(establecimiento: 'Cen Fray Casiano', codigo: '123', Fecha_creacion: '8/11/2023', personal: 'Cocina')

#Role.create(name: 'admin')

#User_role.create(user_id: '1', role_id: '1')

user = User.find(1)
role = Role.find_by(name: :admin)
user.add_role(role.name)
