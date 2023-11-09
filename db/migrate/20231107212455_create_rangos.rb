class CreateRangos < ActiveRecord::Migration[7.0]
  has_many :rango_registros
  
  def change
    create_table :rangos do |t|
      t.string :description

      t.timestamps
    end
  end
end
