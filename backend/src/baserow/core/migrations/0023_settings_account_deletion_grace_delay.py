# Generated by Django 3.2.12 on 2022-05-12 08:42

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("core", "0022_userprofile_deleted"),
    ]

    operations = [
        migrations.AddField(
            model_name="settings",
            name="account_deletion_grace_delay",
            field=models.PositiveSmallIntegerField(
                default=30,
                help_text=(
                    "Number of days after the last login for an account pending "
                    "deletion to be deleted"
                ),
            ),
        ),
    ]
