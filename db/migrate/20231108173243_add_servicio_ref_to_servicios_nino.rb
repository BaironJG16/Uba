class AddServicioRefToServiciosNino < ActiveRecord::Migration[7.0]
  def change
    add_reference :servicios_ninos, :servicio, null: false, foreign_key: true
  end
end