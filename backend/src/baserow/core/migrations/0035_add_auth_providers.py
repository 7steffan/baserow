# Generated by Django 3.2.13 on 2022-10-25 15:31

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models

import baserow.core.mixins


class Migration(migrations.Migration):
    dependencies = [
        ("contenttypes", "0002_remove_content_type_name"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("core", "0034_add_install_template_job"),
    ]

    operations = [
        migrations.CreateModel(
            name="AuthProviderModel",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("created_on", models.DateTimeField(auto_now_add=True)),
                ("updated_on", models.DateTimeField(auto_now=True)),
                ("domain", models.CharField(max_length=255, null=True)),
                ("enabled", models.BooleanField(default=True)),
                (
                    "content_type",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="auth_providers",
                        to="contenttypes.contenttype",
                        verbose_name="content type",
                    ),
                ),
                (
                    "users",
                    models.ManyToManyField(
                        help_text="The users that have been authenticated with this provider.",
                        related_name="auth_providers",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={
                "ordering": ["domain"],
            },
            bases=(baserow.core.mixins.PolymorphicContentTypeMixin, models.Model),
        ),
        migrations.AlterField(
            model_name="application",
            name="installed_from_template",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                related_name="installed_applications",
                to="core.template",
            ),
        ),
        migrations.CreateModel(
            name="PasswordAuthProviderModel",
            fields=[
                (
                    "authprovidermodel_ptr",
                    models.OneToOneField(
                        auto_created=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        parent_link=True,
                        primary_key=True,
                        serialize=False,
                        to="core.authprovidermodel",
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
            bases=("core.authprovidermodel",),
        ),
    ]
