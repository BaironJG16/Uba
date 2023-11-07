class CreateTiposUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :tipos_users do |t|
      t.string :nombre
      t.string :apellido
      t.string :puesto

      t.timestamps
    end
  end
end
