class CreateUsers < ActiveRecord::Migration[7.0]
  has_many :TiposUser

  def change
    create_table :users do |t|
      t.string :nombre
      t.string :apellido
      t.integer :cedula
      t.string :correo
      t.string :direccion
      t.string :password

      t.timestamps
    end
  end
end
