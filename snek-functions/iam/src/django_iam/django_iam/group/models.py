import django.contrib.auth.validators
from django.db import models


class Group(models.Model):
    name = models.CharField(
        "name",
        null=True,
        blank=False,
        error_messages={"unique": "A group with that name already exists."},
        help_text="Required. 36 characters or fewer. Letters, digits and @/./+/-/_ only.",
        max_length=36,
        unique=True,
    )
    description = models.CharField(
        "description",
        null=True,
        blank=False,
        help_text="280 characters or fewer. Letters, digits and @/./+/-/_ only.",
        max_length=280,
    )
    users = models.ManyToManyField(
        "user.User",
        verbose_name="users",
        blank=True,
    )
    permissions = models.ManyToManyField(
        "permission.Permission",
        verbose_name="permissions",
        blank=True,
    )

    # Custom save function
    def save(self, *args, **kwargs):
        super(Group, self).save(*args, **kwargs)

    def __str__(self):
        return f"{self.name}"


# SPDX-License-Identifier: (EUPL-1.2)
# Copyright © 2021 snek.at