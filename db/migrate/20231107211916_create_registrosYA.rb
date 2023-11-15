class CreateRegistros < ActiveRecord::Migration[7.0]
  has_many :rango_registros
  
  def change
    create_table :registros do |t|
      t.string :establecimiento
      t.integer :codigo
      t.date :Fecha_creacion
      t.string :personal

      t.timestamps
    end
  end
end
