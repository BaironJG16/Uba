class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable

  rolify
  def asignar_rol_admin
    role = Role.find_by(name: :admin)
    add_role(role.name)
  end
end
