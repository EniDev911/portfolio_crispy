---
title: "Crear Cuenta en AWS y usar Capa Gratuita"
categories: ["Tutoriales", "Devops"]
---


### Paso 1: Crear una cuenta en AWS

1. **Accede a la página de AWS Free Tier:**
   - Dirígete al siguiente enlace para comenzar:  
   [AWS Free Tier](https://aws.amazon.com/free/){: target='_blank' }
   
2. **Haz clic en "Create a Free Account":**
   - En la parte superior de la página, encontrarás el botón **"Create a Free Account"**. Haz clic allí para comenzar el proceso de registro.

3. **Proporcionar la información de la cuenta:**
   - **Nombre de la cuenta**: Ingresa tu nombre completo.
   - **Correo electrónico**: Introduce una dirección de correo electrónico válida.
   - **Contraseña**: Crea una contraseña segura (mínimo 8 caracteres con letras, números y símbolos).
   - **Confirmar la contraseña**: Vuelve a escribir la contraseña para confirmarla.
   - **Nombre de la cuenta**: Elige un nombre para tu cuenta de AWS (esto es lo que se mostrará en la consola de administración).

4. **Haz clic en "Continue"** para avanzar.

### Paso 2: Información de contacto

1. **Seleccionar tipo de cuenta:**
   - Selecciona el tipo de cuenta que deseas crear:
     - **Personal**: Para una cuenta personal.
     - **Professional**: Si es para una cuenta de empresa.
   
2. **Rellenar los campos de la información de contacto**:
   - Nombre, dirección, número de teléfono y país. Asegúrate de ingresar la información correctamente.
   
3. **Haz clic en "Continue"**.

### Paso 3: Información de pago (tarjeta de crédito)

1. **Agregar detalles de la tarjeta de crédito:**
   - Amazon AWS requiere un **método de pago válido**, incluso para utilizar la capa gratuita. Debes ingresar una tarjeta de crédito o débito (Visa, MasterCard, American Express, etc.).
   - No te preocupes, **no se te cobrará** si no superas los límites de la capa gratuita, pero es necesario para verificar tu identidad.

2. **Verificar tu dirección**:
   - AWS puede verificar tu dirección de facturación a través de la tarjeta de crédito.

3. **Haz clic en "Verify and Add"**.

### Paso 4: Verificación de identidad (Autenticación por teléfono)

1. **Verificación telefónica:**
   - AWS te pedirá verificar tu identidad mediante una llamada telefónica o mensaje de texto. Ingresarás tu número de teléfono, y AWS te llamará o enviará un mensaje con un código de verificación.
   
2. **Introduce el código**:
   - Ingresa el código de verificación que recibiste por teléfono en el campo correspondiente.

3. **Haz clic en "Continue"** para finalizar la verificación.

### Paso 5: Selección de soporte

1. **Seleccionar plan de soporte**:
   - AWS ofrece varias opciones de soporte:
     - **Basic** (Gratis): El plan básico, que es suficiente para la capa gratuita.
     - **Developer** y **Business**: Son planes pagos con soporte premium.
   
   - Selecciona **Basic Support**, que es gratuito.

2. **Haz clic en "Continue"**.

### Paso 6: Configuración de la capa gratuita (Free Tier)

1. **Accede a la consola de AWS**:
   - Después de completar el registro, serás redirigido automáticamente a la consola de administración de AWS. También puedes acceder en cualquier momento a través de este enlace: [Consola de administración de AWS](https://console.aws.amazon.com/).

2. **Verificación de la capa gratuita**:
   - AWS Free Tier te otorga recursos limitados de forma gratuita durante el primer año (750 horas al mes de una instancia t2.micro, almacenamiento en disco, entre otros). Al acceder a la consola de AWS, podrás ver el servicio "Free Tier" que te permitirá ver los recursos gratuitos disponibles.

---

### Paso 7: Lanzar tu primer VPS en AWS (Instancia EC2)

Con tu cuenta creada y activada, puedes comenzar a usar los servicios gratuitos de AWS. Para lanzar tu primera **instancia EC2** (tu VPS en AWS), sigue estos pasos:

1. **Accede a la Consola de EC2**:
   - Desde la consola principal de AWS, busca "EC2" en la barra de búsqueda de servicios y haz clic en el servicio **EC2**.

![buscar ec2](aws/search-ec2.png)

2. **Lanzar una nueva instancia**:
   - En el panel de EC2, haz clic en <a href="https://us-east-2.console.aws.amazon.com/ec2/home?region=us-east-2#LaunchInstances:" target="_blank" class="border-0"><kbd style="background: #ec7211; color: black">Launch Instance</kbd></a> para crear una nueva instancia.

3. **Seleccionar una imagen de máquina (AMI)**:
   - Elige una **Amazon Machine Image (AMI)**. Para empezar, puedes seleccionar una de las imágenes estándar que AWS proporciona, como **Amazon Linux 2** o **Ubuntu**.

4. **Seleccionar tipo de instancia**:
   - Selecciona el tipo de instancia **t2.micro**, que es parte de la capa gratuita.
   - **t2.micro** tiene 1 vCPU y 1 GB de RAM, suficiente para proyectos pequeños y pruebas.

5. **Configurar la instancia**:
   - La configuración predeterminada está bien para comenzar, pero si deseas personalizar la instancia (como configurar redes o almacenamiento adicional), puedes hacerlo aquí.

6. **Agregar almacenamiento (opcional)**:
   - AWS te proporcionará 30 GB de almacenamiento en disco (EBS) gratis. Puedes ajustar el tamaño de este almacenamiento o agregar más si es necesario.

7. **Configurar un par de claves**:
   - Para conectarte a tu instancia mediante SSH, necesitarás un **par de claves**. Si no tienes uno, crea uno nuevo y guarda el archivo .pem en un lugar seguro.
   
8. **Revisar y lanzar**:
   - Revisa toda la configuración y haz clic en **Launch** para crear tu instancia.

9. **Accede a tu instancia**:
   - Después de unos minutos, tu instancia estará en funcionamiento. Puedes conectarte a ella utilizando SSH con la clave privada que descargaste anteriormente.

![connection ssh ec2](aws/connect-ssh-ec2.png)

---

### **Paso 8: Comprobar el uso de la capa gratuita**

AWS te proporciona herramientas para rastrear el uso de los recursos gratuitos y evitar cargos inesperados. Para monitorear tu consumo, puedes hacer lo siguiente:

1. **Accede al AWS Billing Dashboard**:  
   En la consola de AWS, ve a **Billing** (Facturación) para ver tu uso y los recursos que has utilizado. AWS te proporcionará un desglose de tus recursos gratuitos y de pago.

2. **AWS Free Tier Usage Alerts**:  
   Puedes configurar alertas para recibir notificaciones cuando te acerques a los límites de los recursos gratuitos, evitando cargos adicionales.

---

Con estos pasos, ya tendrás acceso a la capa gratuita de AWS y podrás comenzar a crear y administrar tu VPS en la nube.
