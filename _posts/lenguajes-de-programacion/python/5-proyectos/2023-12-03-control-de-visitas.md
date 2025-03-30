---
title: "Proyecto Python : Control de Accesos"
categories: ["Python", "05. Proyectos"]
---


Un sistema de control de de accesos vehiculares para registrar entrada y salida.

## __Contexto del Proyecto de Consola__

Este sistema de control de accesos vehiculares permitirá registrar la entrada y salida de vehículos, junto con los datos del conductor, la patente del vehículo y a la empresa que pertenece. La información se guarda en un archivo **CSV** para su posterior consulta. 

## __Requerimientos__

**1. Registrar la entrada de vehículos**
: Permitir al usuario registrar un vehículo al ingresar los siguientes datos: **rut**, **nombre conductor** y la **empresa** a la que pertenece.

**2. Registrar la salida de vehículos**
: Permitir al usuario registrar la salida de un vehículo, basándose en su patente.

**3. Visualizar vehículos actuales**
: Mostrar los vehículos que están actualmente dentro, es decir, los que han registrado su entrada pero no su salida.

## __Desarrollo Paso a Paso__


### __Registrar una Entrada__

Cuando un vehículo llega, registramos su entrada con la fecha y hora actual. Por ejemplo, una función `registrar_entrada()`:

```python
def registrar_entrada():
    rut = input("Ingrese el RUT del conductor: ")
    nombre = input("Ingrese el nombre del conductor: ")
    patente = input("Ingrese la patente del vehículo: ")
    empresa = input("Ingrese la empresa: ")
    entrada = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    with open(CSV_FILE, mode="a", newline="") as file:
        writer = csv.writer(file)
        writer.writerow([rut, nombre, patente, empresa, entrada, ""])

    print(f"\n✅ Entrada registrada para {nombre} ({patente}) a las {entrada}\n")
```
{: .nolineno }

