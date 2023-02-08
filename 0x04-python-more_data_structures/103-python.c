#include <Python.h>

void print_python_list(PyObject *p)
{
    Py_ssize_t size = PyList_Size(p);
    Py_ssize_t i;
    PyObject *element;

    printf("[*] Python list info\n");
    printf("[*] Size of the Python List = %ld\n", size);
    printf("[*] Allocated = %ld\n", ((PyListObject *)p)->allocated);

    for (i = 0; i < size; i++)
    {
        element = PyList_GetItem(p, i);
        printf("Element %ld: %s\n", i, Py_TYPE(element)->tp_name);
    }
}

void print_python_bytes(PyObject *p)
{
    Py_ssize_t size = PyBytes_Size(p);
    Py_ssize_t i;
    char *str;

    if (!PyBytes_Check(p))
    {
        printf("[ERROR] Invalid Bytes Object\n");
        return;
    }

    str = PyBytes_AsString(p);
    printf("[*] Python bytes info\n");
    printf("[*] Size: %ld\n", size);
    printf("[*] Trying string: %s\n", str);
    printf("[*] First %d bytes: ", (int)(size < 10 ? size : 10));

    for (i = 0; i < size && i < 10; i++)
        printf("%02x ", str[i] & 0xff);
    printf("\n");
}
