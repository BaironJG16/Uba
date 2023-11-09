class CreateRangoRegistros < ActiveRecord::Migration[7.0]
  belongs_to :rango
  belongs_to :registro

  def change
    create_table :rango_registros do |t|

      t.timestamps
    end
  end
end