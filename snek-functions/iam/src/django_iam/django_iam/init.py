"""
Setups the django environment.
"""

import sys
import os
import django


def init_django():
    """
    Initializes the django environment.
    """
    sys.dont_write_bytecode = True
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'django_iam.settings')
    django.setup()

    print('Django environment initialized.')