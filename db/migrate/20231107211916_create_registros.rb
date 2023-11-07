class CreateRegistros < ActiveRecord::Migration[7.0]
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
