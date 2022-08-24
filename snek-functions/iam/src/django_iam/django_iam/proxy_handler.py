"""
Setup the proxy handler with `python3 -m django_iam.proxy_handler`
"""

from .proxy import ProxyServer, ProxyMessage
from .init import init_django


def function_handler(message: ProxyMessage):
    from .db.models import Project

    if message.fnName == 'pyCreateProject':
        name = message.data

        project = Project(name=name)
        project.save()

        data = {
            "id": project.id,
            "name": project.name
        }

        return data
    elif message.fnName == 'pyListProjects':
        qs = Project.objects.all()
        return [{
            "id": project.id,
            "name": project.name
        } for project in qs]

    return 'Unknown function'


ProxyServer(setup_fn=init_django).handle(function_handler)
