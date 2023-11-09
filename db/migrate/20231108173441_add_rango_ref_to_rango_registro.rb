class AddRangoRefToRangoRegistro < ActiveRecord::Migration[7.0]
  def change
    add_reference :rango_registros, :rango, null: false, foreign_key: true
  end
end