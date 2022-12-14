# Generated by Django 4.1 on 2022-08-23 08:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("ressource", "0001_initial"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="ressource",
            name="ressourcename",
        ),
        migrations.AddField(
            model_name="ressource",
            name="name",
            field=models.CharField(
                error_messages={"unique": "A ressource with that name already exists."},
                help_text="Required. 36 characters or fewer. Letters, digits and @/./+/-/_ only.",
                max_length=36,
                null=True,
                unique=True,
                verbose_name="name",
            ),
        ),
    ]
