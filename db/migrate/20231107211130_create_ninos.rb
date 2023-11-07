class CreateNinos < ActiveRecord::Migration[7.0]
  def change
    create_table :ninos do |t|
      t.string :nombre
      t.string :apellido
      t.date :Fecha_nacimiento
      t.string :direccion
      
      t.timestamps
    end
  end
end
