class CreateServiciosNinos < ActiveRecord::Migration[7.0]
  belongs_to :nino
  belongs_to :servicio
  
  def change
    create_table :servicios_ninos do |t|

      t.timestamps
    end
  end
end