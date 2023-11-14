import React from 'react'
import uvaAlone from '../../assets/img/uvaAlone.png';
import "./SideBar.css"
import { useNavigate } from 'react-router-dom';


function SideBar() {

    const navigation = useNavigate();

 
    
    function handleUsers() {
      navigation('/Users')
      }


  return (
    <div>
         <div className="area"></div><nav className="main-menu">
            <ul>
                <li className='liLogo'>
                    <a className='logo' href="./PrincipalPage">
                    <img className='uvaAlone' src={uvaAlone} alt='uva logo'></img>
                        <span className="nav-text1">

                        </span>
                    </a>
                  
                </li>
                <li className="has-subnav">
                    <a className='aIcons' href="./Inventory">
                    <img className='IconNav' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAs
                    TAAALEwEAmpwYAAACNklEQVR4nO2YPYgTQRSAnyAe2FidVhYW1wiWJs11YuIPZBG5E+RgZjk4sDgwjXpk3q2Nepm3J1
                    pIIhwW5sDG7jq5RhEEO1srMf6V2mghOjKZJUTI6pLdu70H88FrNmHefHnzJjML4PF4PJ6ikUhGIH2VqJ+EK7em//Vd0
                    4FzpgN90wVTaHSgbx7C2YkFhqH09n8Eip98dxjvJxIYSKj2jKsCmYUWHUsVyDCRxxKMvvB39MJsEpAHofSzZDmdzyPQ
                    GyOwKXdBQCq9YQXClr6SRyBPQE6ByFVA32YpEK5SmDTyJksBgfGpQQUUvWApIFV7JllC71gKLC/fn5KofwtFP6Mo2s9
                    OwCJQfxn0QSs+CiwFlH7tttJ4dtznr66B2cmAvEhFT5Od6DJLAYH6btLIN1guoVBR022l+gFLAYH6YnIe2mJ3mLNIpJ
                    OuB+gNjGFPH+Ysiyv3jiRN/A04LiEAs0+i/m4llq6vHWIoACCQ3roqrJ9gKSCV3k672LAQEEo/SrvY8BBAupl2sdmzl
                    /pRxCotpl1s7KsPm2gnJm+6cAaKQGJ8OvkveDmc+PMps9sBk7IQ0WGh6JdU9CNEqrITsAik3ugLL3YCS1F0UKKOhaI+
                    S4E0js/NHajWGu1qrfGpUg8+VuqNNfsMSh4rMzZJtR6Y0bDPyh4rM/bXsokuNdHMN9ElrgWfyx4rM7bUNpFNOH/VJa3
                    Ugg9lj5Wz7MGdssfKjG0ym9g1Xf4mrhQ0lsfj8XggC38ARlEhEqFwuEEAAAAASUVORK5CYII=" alt='Inventario'/>
                        <span className="nav-text">
                            Inventario
                        </span>
                    </a>
                    
                </li>
                <li className="has-subnav">
                    <a className='aIcons' href="./Files">
                    <img className='IconNav' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAs
                    TAAALEwEAmpwYAAAAiElEQVR4nO3Wuw2AMAxFUa/CJG8GNqNiE5bIOlRUQVCm4SOE4+QeyQNYz7FjBgDV0bjkO2W1Eg
                    1UlEDpyQhNactflr1tYJjXs2ggOSUQeoTEGnWg6AkAvb8B0YAztXSJD3zmknMCoUdIrFEHip4A0PsbEA04U0uXuEQDi
                    QSusYW8KfodAAD7yw6OigzTnel5xQAAAABJRU5ErkJggg==" alt="registros"/>
                        <span className="nav-text">
                            Registros
                        </span>
                    </a>
                    
                </li>
                <li className="has-subnav">
                    <a className='aIcons' href="./BranchOffices">
                    <img className='IconNav' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAs
                    TAAALEwEAmpwYAAACz0lEQVR4nO2Zz2sTQRTHv3oQpfUmCNENEaoFj14UM7NbqwGr/4FXb3rxJhTxoIdsL9kKItKTBx
                    EMhUrrTVGPJme1YvHS7upBI/6kGxSf7Jpou9lkd2Znkyj7hXfZ7Mz7fibz3g4MkClTJmERwwnimCOOl8TwtRXL/jOG4
                    0ig3FVb00x7Xivbn73Il+2Fwow9rsa4jv3E8YQ4KCIek4ExGfP5stPImw4F4oP3WzLzRTDiaMQw346GN0Ykh2ba8yHm
                    21GVN8+xjxjeCZj/CyHwT2jelukCoJn2J3kAhkcd5hjuEYNBJYz4UcQEcSyGQDxUA+B8lDPPMRli/mIP2OmO94uYiJM
                    rX7YXum6hsnNXDoDhZnDlI8dwLAUgbsTJVZixx72CDQF4v8dc2ysLsBwAMCLH6DgWAHgu1IlMp+rteS+8lZc23wL4ss
                    mMgdHIMUexMwAgX4BJRQzrCgC+YVAijteiBRlS+M9Eclaeuqdn603bqjfXrLo7lRSgGjCzGDmG4b5MEbflGZ+tN8mPW
                    nMVSUQ6zoS00emu73NcCnm/ODiAEkY6Cvl3LPndxsCoH9626Vx5z/wrAraIAbhTPkStuXqttn4yEYAPwXBL4hjRjguJ
                    DSQVMRwghh/C5hne0BHswDCIGG5LAJyTyVVR2YX+ABgYIwZXwPwLOohtMrkslUW8CYLhisA/MCmbx0oNwMB2YliJYf5
                    OkjyW6i60UaSD9yxor3AN7MIwixgudwH4STpODdoforoAAVuJ40HI6l+PO1evHJWkXShOEdFh7CaGtxvMr4SdVLvN1S
                    uHlbSI405AOkrE8L115D4kMlfKAG7sLkAc54njrOhcvXJYaXahTP1QJY2zSD9lpfUp75esfx/AzbrAUN4PpK2cqvsB0
                    fOLqueaqvsB0c+/queaqvuB4QRw4t8PiJ5fVD3Pp3E/0E8V0rgf6Ldyqu8HMmX6z/ULLjm5Nr+STYAAAAAASUVORK5C
                    YII=" alt='Sede'/>
                        <span className="nav-text">
                            Sedes y Contactos
                        </span>
                    </a>
                   
                </li>
                <li>
                    <a className='aIcons' href="./AttendanceList">
                    <img className='IconNav' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAs
                    TAAALEwEAmpwYAAAEhElEQVR4nO2YX2gcRRzHNykaSyv4IhoFY4NIFKxJc7YhFqpV2b3bmd3c3c5e2of0QTkaTEuRgr
                    v54yWmQelDsbZQUdFS0Jo+mF6b7l7AJLaPIvjSB5GCFlRqlcQm2dtc/o3M5i4m19vb2b0tHnI/+MJyt7/vfD87c7PcM
                    EylKlUpqsK6IGANTmINzmU1iTUAGY81NhjqPd0ZnH5nH4cT+zh8qjM4NfZuUGXuRWEdvod1iAtKA0Nu/YbfDl5TEYcL
                    aVgNTvocXhBsw+eUgoDW73J/cKBbLhxeRRwm340OhHr9AyBLxQlAAxPFPBKJRLWC2IOqxH7XLXMrduHVrPrauSUFsT8
                    oiDsajzffVyIAmHUE0MFMMQ9VYs9mw/198xxvOPndPg/mFMT+SnoUxGoIoU33GADesevvRiyfe7IK4o7T+ikSd2TdrL
                    xeCsAExQyM2/UrEje8BiCzr1ItSR2Mq4h7dg1AYq96B0hB4DygwNsCIPaXXJCeSKiObL00foc4rkaR2OXVXnaeYZgq7
                    xA6PGb/A4aDxXoVxBo5gARC91t+Ghii8VMl9s+1XlF8yDPAvzMBxq01bK1jMF7syVP5aWAi6zVTqt//txKYqX7zk1e+
                    ZE/snt15bNdKY38zJiLX7IkXZzs/3fsFuceN50I0eth8IfpjuhZljM2xFeMBGRuPyBmzCf00H4oe9S38ZyNia1dSnOG
                    +Anj36T048H4LbhwI4Mb+gHVNPuOGAe5Kinc+12CLk595QHzS3B79zWBiuJjMBumWCdFTJYUngTouiktgpA3TqGNEXD
                    o3Kuyy80vvj9Sln0Bpp/BGVulaZJp8pN5TeLIkDieFadrwOR252DZl5znfJP1MG97IzcRz6KYngDNJqLoNn9OZS+Jda
                    zgjh9uNKnfhjawyvNThGqA3Kd7wCtCXFG7k+5k7petewhtkFgLSddcAZIfZ3rcDE9EGz91PevP9rN3GI0C6FpG3sLt6
                    vr8ZewUgW2y+n1HjLbxBVBO7y8+x1r/aaQHW99j6JSE2qumCL38s2vr9ZwDLH4jUT36pJ1x+AIuHwtQAC/sj5QeQ4aP
                    UAPOt0fIDMBsQ/e7zmFxmABrExmYXu09VDOMRoXwAyK7idgtdPil6BCB/+zTwO2neE75CpWz421gXUCG/xbfaptwCLH
                    SFZwr5UUJwD2MdXKAHABdIj51feiv60C3A3JbYR0yplR+0lf/aUv7nTj4GE0u5fxPL3/gO0PTSWUvuAeRbHgD+8B2gI
                    XDKkocZiBtMbNoFwDTp8R2g7pkhS24BSGEGbV04EL6UeTmKzW0Ipx+UsbFpVeTarEc4s1fCi/HIt+TeksNbg+rg4IZz
                    m/NPr2rjWc5Jar8rIObol4JdvoS3BtSEdmcA0EPtN8rXO/qN8c3+AaQg5zigDt6g9sNMFdbAX/Z+II2/j5d2pL5hQA2
                    2OAMIgkvPlK2fBq/5Ft4aLAUaHAGKHKfYAAwWATjuL8Bo6FHnNQu3ufLUoWjrlwJRfwE0rsYZ4LUt7gDCtbZ+l/nHfQ
                    WoVKUqxZR1/QPjRjLGmJhHPQAAAABJRU5ErkJggg==" alt='Niños'/>
                        <span className="nav-text">
                            Asistencia de niños
                        </span>
                    </a>
                </li>
                <li>
                    <a className='aIcons' href="./Users">
                    <img className='IconNav' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAs
                    TAAALEwEAmpwYAAAFkElEQVR4nO2XfWwTZRzHi8YAUV5GHDAl0LsOMMQQlQhjdIN7emPUMQZo241tzDlWaWURCHEi4i
                    bIYGyLsOyOZdM4Erqsw0nGxmCriAnGBGOikUnQyD++oULs1k7BuOxr7rqXa+/a7bouWWJ/yfef557nuc/n6e+urUYTr
                    WhFK1r/yyKELGMYpooQ0k0I8RBCMBiHZjKXyWR6kGGYckLIvxLo4TAM028wGCwJCQnTNZOtSkpKHiCEOJXASUAMBuJm
                    GCZfM5mKEPLGWOCJJGnryW7NZKikpKQ4AyH/qBVYz4qt9vi4AWChjbBQp2GmfoCZ7oOFhi9U6VjWMwxTGgo0K4OA321
                    AdzWLy2UsDP7XD4QPbqIXwkJfHQFWTA8s1CewUBtDCFwLhM7dYkDdXgNucikYcKYAzSNpK2WF52Bo7uUw4bVLYaZ/Gw
                    U+MGVKexFC3AJM9maCmldZXK+WQyMgLQfZoTfTLfXwm5bOgJm6pRLeF7Nuu4KACBMKGAoZFOhVL2ChqkcFzV8CVCcBX
                    DJg0UkEqDvCAURKgBACdfCZ1DxY6L+DgucuBipWA+1pwMV0X07ogUzpPGqXdM9DuesuSwVqsmlwuToZcOC4sObN7LWf
                    qhMw00cUwbN0wMEVwDnjCLg0VYlSgc+le7qr9J6G1wzDYFyODnyOXCBwXFjjrtSrayGYqZ/84XXA/qeBs6nK4NKMrBt
                    AdvyCYYHKNW+jiR1Q20JwsgPuqjWlak7/ST/4PcuBMymjg8sFAJPW7Le3k+1WLdCc8o2608+k9vhBDILVbI8Hl7dYBi
                    wb93sb0RUBAuVhCBxVJ2ChGpQEuLx48AoCsnF/gTa/vRvZx9DM9qmA96IlNU6lAP2FkkBYLWSmumX7n00xwZky+rPgF
                    Oasz1YFL97ATP8SMQEL9YfiPZrZbaG+hQeaWOHhzVINPyhwL4IC94Pdp+fdJNx7j0G/wyD+pBDSf4YVx4RrYcGLAha6
                    WArR3yr5shol/a3PBT4DJcHu467SI1TCFgiU6M6ngY4xCHSk48YOXUj4BfU9c2LtV5tmZ7b13jyeNhAMXrgWk9XWE2v
                    7zBF/8u7McUlcWfmID+yCMQS8Ed8W6MS5ivDAFC3nLaJ4rzvG3IoZqadRvP9o0NM/cKBMnDN7awu0nPcOxXkKhD3CkK
                    BKBSgRrH4q0PQEcH6tT0ZIa7JvrH6qOMcn4P8HZ9EHmKblPY0U74WQuH1fi3CPbm7Ed+UbZPC3KlIx3+QU58wruiau8
                    cXTJOwV1qchytRqECrKizBFy3vbRyC80Nb0IibzvAgYm+FASXEJbhxPF3Po9bcw/4Um8dqsLWehPfmnRMALivM4VUHn
                    tOTMZTnjR2sq1/b8VTc1KPz3/AzoKxm3sS79/aKOouGe1XJ9+/wABrPoxF3EZLWJoEqZtfVDLCz/VbZuMK+M4bg1U6w
                    uW5G10+ZecXgVlh98Bs31S4MKVHHLxDn6ynWwdtnvvPyxrYDmb8+leG9fEAhoOQ/iiq9jzrZ2zExzYKbxDGabWzFv95
                    fQVruDwUPLe3uFl0FQ9rwredMKXbZGq8sOIRvqN4pwyUdXw1v7kAz+Nj8NCYdXinMyTj8vrhGS2Xb4K92pgBaIVE55d
                    4U4eXv7EISQgos7sfJIou+Ey1bBwetwt3Y6btc+jDouHgnv+OATjulR2GUbXick41zthAhoOc8FRf7CLts+KcBQ8toL
                    sOqYXgRVigD/YnuBbJ2QZEdn5AV4z48y+PyOoliry9anBCFkx6WdSG/YgsTjyXiq9FkxiRXJ2NSwFTs6/U9empc692B
                    J7e+RleA892QCVpdtbzCI8aawyx6kZyNYVpft0oQJuGzKPRvJKuyy/zxxAnZ5z0a6Cl22+xMlYO2yy3s2WtGKVrSiFS
                    3N+Os/Ec+xukPTnh8AAAAASUVORK5CYII=" alt='Usuarios'/>
                        <span className="nav-text" onClick={handleUsers}>
                           Usuarios
                        </span>
                    </a>
                </li>     
            </ul>

            <ul className="logout">
                <li>
                   <a className='aIcons' href="f">
                         <i className="fa fa-power-off fa-2x"></i>
                        <span className="nav-text">
                            Logout
                        </span>
                    </a>
                </li>  
            </ul>
        </nav>
    </div>
  )
}

export default SideBar