class CreateServicios < ActiveRecord::Migration[7.0]
  def change
    create_table :servicios do |t|
      t.string :nombre
      t.string :description
      
      t.timestamps
    end
  end
end
